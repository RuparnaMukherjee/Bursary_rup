import React,{Component} from 'react'
import { MdCloudUpload, MdDelete } from "react-icons/md";
import {GoCloudUpload}from "react-icons/go";

class PhotoIdVerification extends Component{
    constructor(props) {
        super(props);
        this.state = {
            photoId: null
        };
    }

    uploadMedia(e){
        this.setState({photoId: URL.createObjectURL(e)})
    }

    imagePreview(){
        return(
            <div className="preview-wrapper">
                <img src={this.state.photoId} className="preview-image" />
                <div className="delete-btn" onClick={() => {this.setState({photoId: null})}} ><MdDelete size={30} /></div>
            </div>
        )
    }

    render(){
        return(
            <div id="Photo-verify">
                <div className="verification-container">
                    <div className="upload-wrapper">
                        <div className="upload-content">
                            <h1>Upload Photo Identity</h1>
                            {this.state.photoId ? this.imagePreview() : <GoCloudUpload size={200} />}
                            <div className="upload-btn" onClick={() => this.refs.fileUploader.click()}>
                                {this.state.photoId ? "Submit" : "Upload File"}
                                <input id="uploadFile" accept="images/*" style={{display:'none'}} type={"file"} ref="fileUploader"
                                    onChange={(e)=> this.uploadMedia(e.target.files[0]) }/>
                            </div> 
                            <p>*** Upload a Photo Identification document in which your name and picture is clearly visible ***</p>    
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

export { PhotoIdVerification }