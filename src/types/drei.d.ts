declare module "@react-three/drei" {
  import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
  import * as THREE from "three";
  export function useGLTF(
    path: string
  ): GLTF & { scene: THREE.Group };
}