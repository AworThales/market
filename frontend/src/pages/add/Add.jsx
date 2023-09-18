import { useReducer, useState } from 'react';
import './add.scss';
import { INITIAL_STATE, gigReducer } from '../../reducers/gigReducer';
import upload from "../../utils/upload"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const queryClient = useQueryClient();
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  const navigate = useNavigate();


  const handleChange = (e) =>{
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) =>{
    e.preventDefault();
    
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () =>{
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map( async (file)=>{
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: {cover, images}});
    } catch (err) {
      console.log(err);
    }
  };

  console.log(state);

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.delete(`/gigs/`, gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = async (e) =>{
    e.preventDefault();
    mutation.mutate("/myGigs");
    navigate("/myGigs");
  };

  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input 
              onChange={handleChange} 
              name="title" 
              type="text" 
              placeholder="e.g. I will do something I'm really good at" 
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Developemnt</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input 
                  type="file" 
                  onChange={(e)=>setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input 
                  type="file" 
                  multiple 
                  onChange={(e)=>setFiles(e.target.files)} 
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "Uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">Description</label>
            <textarea 
              onChange={handleChange} 
              name="desc" id="" 
              cols="30" rows="16" 
              placeholder='Brief descriptions to introduce your service to customers' 
            />
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input 
              onChange={handleChange} 
              name='shortTitle' 
              type="text" 
              placeholder="e.g. One-page web design" 
            />
            <label htmlFor="">Short Description</label>
            <textarea 
              onChange={handleChange} 
              name="shortDesc" 
              id="" cols="30" 
              rows="10" 
              placeholder='Short description of your service ' 
            />
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input 
              onChange={handleChange} 
              name='deliveryTime' 
              type="text" min={1} 
            />
            <label htmlFor="">Revision Number</label>
            <input 
              onChange={handleChange} 
              name='revisionNumber' 
              type="text" min={1} 
            />
            <label htmlFor="">Add features</label>
            <form action="" className='add' onSubmit={handleFeature}>
              <input 
                onChange={handleChange} 
                type="text" 
                placeholder="e.g. page design" 
              />
              <button type='submit'>Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((feat)=>(
              <div className="item" key={feat}>
                <button onClick={()=>
                  dispatch({type: "REMOVE_FEATURE", payload: feat })
                }>
                  {feat}
                  <span>X</span>
                </button>
              </div>))}
            </div>
            <label htmlFor="">Price</label>
            <input 
              type="text" 
              onChange={handleChange} 
              name='price' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add