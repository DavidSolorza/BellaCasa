declare module "three/examples/jsm/controls/OrbitControls";
declare module "three/examples/jsm/loaders/GLTFLoader";
declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader, LoadingManager } from "three";
  import { Group } from "three";

  export interface GLTF {
    scene: Group;
    scenes: Group[];
    animations: any[];
    cameras: any[];
    asset: any;
  }

  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
