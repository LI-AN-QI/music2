import { DirectionalLight } from "three";

export const addLight = () => {
    //let light = new DirectionalLight("rgb(240, 236, 223)",7)
    let light = new DirectionalLight("rgb(255, 255, 255)",7)
    light.position.set(0,0,2)
    return light
}