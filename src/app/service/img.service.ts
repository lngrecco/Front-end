import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, list } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  url: string = "";

  constructor(private storage: Storage) { }

  uploadImg($event:any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
  const imagesRef = ref(this.storage, 'imagen')
  list(imagesRef)
  .then(async response =>{
  for(let item of response.items){
    this.url = await getDownloadURL(item);
    console.log("la url es: " + this.url);
  }
  })
  .catch(error => console.log(error))
  }
}
