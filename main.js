import './style.css'
import * as THREE from 'three'
import { addLight } from './addLights'
import { ice1,ice2,ice3,coffee } from './addMeshes'

const renderer = new THREE.WebGL1Renderer()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100)
const scene = new THREE.Scene()
const meshes = {} 
const lights = {}
const clock = new THREE.Clock()



const listener = new THREE.AudioListener();
camera.add( listener );

const sound = new THREE.Audio( listener );
const audioLoader = new THREE.AudioLoader();
audioLoader.load( '/sounds/music2.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});



init()


function init(){
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement)

    meshes.ice1 = ice1()
    meshes.ice2 = ice2()
    meshes.ice3 = ice3()
    meshes.coffee = coffee()

    lights.default = addLight()

    //scene.background = new THREE.Color("rgb(41, 17, 7)");
    scene.background = new THREE.Color("rgb(48, 27, 5)");
    scene.add(lights.default)

    scene.add(meshes.ice1)
    scene.add(meshes.ice2)
    scene.add(meshes.ice3)
    scene.add(meshes.coffee)


    
    camera.position.set(0,0,5)

    resize()
    animate()
}

function resize(){
    window.addEventListener('resize',()=>{
        renderer.setSize(window.innerWidth,window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

//animation
function animate(){
    requestAnimationFrame(animate)
    const tick = clock.getElapsedTime()

    //ice1
    meshes.ice1.rotation.x += 0.01
    meshes.ice1.rotation.y += 0.01
    

    meshes.ice1.position.x = Math.sin(tick*0.5) * 0.8 -1.5 
    meshes.ice1.position.y = Math.cos(tick*0.5)* 0.5 -1.5

    //ice2
    meshes.ice2.rotation.x -= 0.01
    meshes.ice2.rotation.y += 0.01

    meshes.ice2.position.x = Math.sin(tick* -0.6) +2
    meshes.ice2.position.y = Math.cos(tick* 0.6)

    //ice3
    meshes.ice3.rotation.x -= 0.01
    meshes.ice3.rotation.y += 0.01

    meshes.ice3.position.x = Math.sin(tick*0.7) * -0.8 -1
    meshes.ice3.position.y = Math.cos(tick*0.7)* 0.8 +1

    //coffee
    meshes.coffee.rotation.x = 5
    meshes.coffee.position.x = Math.sin(tick)* 1.2 + 0.2
    meshes.coffee.position.y = Math.cos(tick)* 1.2 - 0.4

    renderer.render(scene,camera)//scene+camera->renderer
}