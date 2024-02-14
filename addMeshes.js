import { BoxGeometry, SphereGeometry, CylinderGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh, MeshPhysicalMaterial, MeshPhongMaterial,TextureLoader } from "three";

const loader = new TextureLoader()

export const ice1 = () =>{
    const color = loader.load('/textures/Ice_001_COLOR.jpg')
    const displace = loader.load('textures/Ice_001_DISP.png')
    const normal = loader.load('/textures/Ice_001_NRM.jpg')
    const spec = loader.load('/textures/Ice_001_SPEC.jpg')
    //const iceGeometry = new BoxGeometry(1.8,2,1.5)
    const iceGeometry = new SphereGeometry(1.5,4, 4)
    const iceMaterial = new MeshPhysicalMaterial({
        transparent: true,
        opacity: 0.8,
        metalness:0.4,
        map: color,
        normalMap: normal,
        specularIntensityMap: spec
        
    })
    const iceMesh = new Mesh(iceGeometry,iceMaterial)
    iceMesh.position.set(0,0,0)
    return iceMesh 
}


export const ice2 = () =>{
    const color = loader.load('/textures/Ice_001_COLOR.jpg')
    //const displace = loader.load('textures/Ice_001_DISP.png')
    const normal = loader.load('/textures/Ice_001_NRM.jpg')
    const spec = loader.load('/textures/Ice_001_SPEC.jpg')
    const iceGeometry = new SphereGeometry(1.6,2, 4)
    const iceMaterial = new MeshPhysicalMaterial({
        transparent: true,
        opacity: 0.8,
        metalness:0.4,
        map: color,
        // displacementMap: displace,
        normalMap: normal,
        specularIntensityMap: spec
        
    })
    const iceMesh = new Mesh(iceGeometry,iceMaterial)
    iceMesh.position.set(0,0,0)
    return iceMesh 
}


export const ice3 = () =>{
    const color = loader.load('/textures/Ice_001_COLOR.jpg')
    //const displace = loader.load('textures/Ice_001_DISP.png')
    const normal = loader.load('/textures/Ice_001_NRM.jpg')
    const spec = loader.load('/textures/Ice_001_SPEC.jpg')
    const iceGeometry = new SphereGeometry(1.5, 5, 2)
    const iceMaterial = new MeshPhysicalMaterial({
        transparent: true,
        opacity: 0.8,
        metalness:0.4,
        map: color,
        //displacementMap: displace,
        normalMap: normal,
        specularIntensityMap: spec
        
    })
    const iceMesh = new Mesh(iceGeometry,iceMaterial)
    iceMesh.position.set(0,0,0)
    return iceMesh 
}


export const coffee = () =>{
    const color = loader.load('/textures/straw.jpg')
    const coffeeGeometry = new CylinderGeometry( 0.5, 0.5, 15, 32 )
    const coffeeMaterial = new MeshPhysicalMaterial({
        metalness:0.4,
        roughness:0,
        map: color
        // color: "rgb(199, 166, 125)"

        

        
    })
    const coffeeMesh = new Mesh(coffeeGeometry,coffeeMaterial)
    coffeeMesh.position.set(0,0,-2)
    return coffeeMesh 
}


