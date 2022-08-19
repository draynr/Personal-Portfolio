import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function loader (
	scene, path,options ={receiveShadow:true, castShadow:true} 
) {
	const {receiveShadow, castShadow } = options
	return new Promise((resolve,reject)) => {
		const load = new GLTFLoader()
		load.load(path,gltf=>{
			const obj = gltf.scene
			obj.name=""
		})
	}
}
