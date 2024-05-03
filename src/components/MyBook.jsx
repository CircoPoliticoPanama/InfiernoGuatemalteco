import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Fuego from '../assets/images/Fuego.png'
import Sello from '../assets/images/Sello.png'

import CondenaJulio from '../assets/images/condenas/Julio.jpg'
import CondenaAcisclo from '../assets/images/condenas/Acisclo.webp'
import CondenaJuan from '../assets/images/condenas/JuanCarlos.webp'
import CondenaLuisAdrian from '../assets/images/condenas/LuisAdrian.jpg'
import CondenaRoxana from '../assets/images/condenas/Roxana.jpg'
import CondenaOtto from '../assets/images/condenas/Otto.jpg'
import CondenaAlejandro from '../assets/images/condenas/Alejandro.webp'
import CondenaJose from '../assets/images/condenas/JoseLuis.webp'


const Page1 = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage p-5 md:p-12 bg-gradient-to-r to-[#d6bb72] from-[#ead086]" ref={ref}>
            <h2 className="font-bold text-red-800 text-lg md:text-xl">{props.sin}</h2>
            <img src={props.img} alt="" className="w-full aspect-video object-cover mt-3" />
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-3xl font-bold mt-2 text-red-800">{props.character}</h3>
                <h4 className="text-lg md:text-xl font-semibold mt-2"><span className="font-bold">Cargo: </span>{props.position}</h4>
                <h4 className="text-lg md:text-xl font-semibold mt-2"><span className="font-bold">Condena: </span>{props.sentence}</h4>
                <h4 className="text-lg md:text-xl font-semibold mt-2"><span className="font-bold">Debe: </span><span className="text-xl font-black text-yellow-800 md:text-3xl"> {props.dept}</span></h4>
            </div>
        </div>
    );
});
const Page2 = React.forwardRef((props, ref2) => {
    return (
        <div className="demoPage p-5 md:p-12 bg-gradient-to-r to-[#d6bb72] from-[#ead086]" ref={ref2}>
            <h2 className="font-black text-4xl text-red-800">El ilícito</h2>
            <h3 className="text-xl md:text-2xl font-semibold mt-2">{props.crime}</h3>
            <div className="text-md md:text-lg mt-2 font-semibold flex flex-col gap-5">{props.children}</div>
            <p className="absolute bottom-2 right-3">{props.number}</p>
        </div>
    );
});
const Page3 = React.forwardRef((props, ref3) => {
    return (
        <div className="demoPage grid text-center place-content-center bg-gradient-to-r p-5 to-[#d6bb72] from-[#ead086]" ref={ref3}>
            {props.children}
        </div>
    );
});



function MyBook(props) {
    const [size, setSize] = useState({ width: 300, height: 500 });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth > 600 ? 450 : window.innerWidth - 50,
                height: window.innerWidth > 600 ? 600 : window.innerHeight - 200
            });
        };


        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="font-cinzel mx-auto ">
            <HTMLFlipBook showCover width={size.width} height={size.height} mobileScrollSupport={true} >
                <div className="demoPage bg-gradient-to-t to-yellow-500 from-red-800 text-red-800 grid place-content-center text-center text-5xl font-black p-6">
                    <img src={Fuego} alt="" className="absolute bottom-0 right-0" />
                    <img src={Fuego} alt="" className="absolute top-0 right-0 rotate-180" />
                    <span className="text-3xl text-red-950/40">LIBRO:</span>
                    <h1 className="inline-block bg-clip-text text-transparent text-3xl md:text-6xl bg-gradient-to-t from-red-950 to-red-800">La condena <br />De los Políticos Corruptos</h1></div>
                {/* AVARICIA */}
                <Page3>
                    <img src={Sello} alt="Sello del diablo." className="mx-auto" />
                </Page3>
                <Page3>
                    <h2 className="text-4xl font-black text-red-800">Capítulo 1: AVARICIA</h2>
                    <br />
                    <p className="text-lg font-gray-800">En este capítulo:
                        <br />
                        <span className="font-bold">José Luis Benito</span> y <span className="font-bold">Luis Adrian Ruiz</span>
                    </p>
                </Page3>

                {/* José Luis Benito */}
                <Page1 img={CondenaJose} character="José Luis Benito" sin="Capítulo 1: Avaricia" position="Ex-Ministro de Comunicaciones" sentence="2 años de cárcel" dept="Q122.000.000" />
                <Page2 crime="Lavado de Dinero">
                    <p>
                        Exministro José Luis Benito es condenado a 2 años de cárcel por caso de maletas con Q122 millones
                    </p>
                    <p>
                        Las manos de José Luis Benito quedaron impregnadas con la codicia, al permitir el flujo siniestro de dinero malhabido, mientras su conciencia se ahogaba en un mar de lamentos y riquezas ilícitas.
                    </p>
                </Page2>

                      {/* Luis Adrian Ruiz */}
                      <Page1 img={CondenaLuisAdrian} character="Luis Adrian Ruiz" sin="Capítulo 1: Avaricia" position="Ex-Presidente" sentence="Exilio" dept="MUCHO DINERO" />
                <Page2 crime="Actos de Corrupción">
                    <p>
                        En epocas de Sinibaldi y el Partido Patriota fue destituido como vice ministro sindicado en actos de lavado cuando fue sorprendido cobrando coimas a contratistas.
                    </p>
                    <p>
                        El oscuro pacto de Luis Adrian Ruiz le otorgó riquezas incontables, desviando fondos públicos para su beneficio personal, manchando su alma con la avaricia más vil.
                    </p>
                </Page2>

                {/* Soberbia */}
                <Page3>
                    <img src={Sello} alt="Sello del diablo." className="mx-auto" />
                </Page3>
                <Page3>
                    <h2 className="text-4xl font-black text-red-800">Capítulo 2: SOBERBIA</h2>
                    <br />
                    <p className="text-lg font-gray-800">En este capítulo:
                        <br />
                        <span className="font-bold">Otto Pérez Molina</span>
                    </p>
                </Page3>

                {/* Otto Pérez Molina */}
                <Page1 img={CondenaOtto} character="Otto Pérez Molina" sin="Capítulo 2: Soberbia" position="Político y Ex-Militar" sentence="16 años de cárcel" dept="USD3.500.000" />
                <Page2 crime="Fraude y Corrupción">
                    <p>Pérez Molina fue sentenciado a 16 años de prisión en diciembre de 2022 tras comprobarse que conformaba una red criminal que defraudó al Estado por al menos 3,5 millones de dólares en el caso conocido como La Línea</p>
                    <p>
                        La arrogancia de Otto Pérez Molina lo llevó a creerse intocable, mientras tejía una red de engaños y deshonestidades que finalmente lo sumergieron en un abismo de condena eterna.
                    </p>
                </Page2>

                {/* Lujuria */}
                <Page3>
                    <img src={Sello} alt="Sello del diablo." className="mx-auto" />
                </Page3>
                <Page3>
                    <h2 className="text-4xl font-black text-red-800">Capítulo 3: LUJURIA</h2>
                    <br />
                    <p className="text-lg font-gray-800">En este capítulo:
                        <br />
                        <span className="font-bold">Roxana Baldetti</span>
                    </p>
                </Page3>

                {/* Roxana Baldetti */}
                <Page1 img={CondenaRoxana} character="Roxana Baldetti" sin="Capítulo 3: Lujuria" position="Ex-Vicepresidenta" sentence="15 años de cárcel" dept="Q22.800.000" />
                <Page2 crime="Estafa y Corrupción">
                    <p>
                        La Sala Segunda de Mayor Riesgo confirmó la sentencia de 15 años de cárcel contra la exvicepresidenta Roxana Baldetti, quien fue encontrada culpable, en 2018, de haber sido parte de una organización criminal que estafó al Estado por Q22.8 millones.
                    </p>
                    <p>
                        Los deseos lujuriosos de Roxana Baldetti la arrastraron hacia un abismo de engaños y corrupción, manchando su alma con el peso de sus depravadas acciones y llevándola hacia un destino de condena sin fin.
                    </p>
                </Page2>

                {/* Envidia */}
                <Page3>
                    <img src={Sello} alt="Sello del diablo." className="mx-auto" />
                </Page3>
                <Page3>
                    <h2 className="text-4xl font-black text-red-800">Capítulo 4: ENVIDIA</h2>
                    <br />
                    <p className="text-lg font-gray-800">En este capítulo:
                        <br />
                        <span className="font-bold">Alejandro Giammattei</span>
                    </p>
                </Page3>

                {/* Alejandro  Giammattei*/}
                <Page1 img={CondenaAlejandro} character="Alejandro Giammattei" sin="Capítulo 4: Envidia" position="Ex-Presidente" sentence="Exilio" dept="MUCHO DINERO" />
                <Page2 crime="Corrupción Desmedida">
                    <p>
                        Giammattei recibió dinero para la concesión de un puerto en el Caribe / EE.UU. lo acusa de corrupción tres días después de que dejara el cargo y le prohíbe la entrada al país
                    </p>
                    <p>
                        La envidia consumió el alma de Alejandro Giammattei, quien cegado por su deseo de poder y riquezas, selló su destino con actos de corrupción que lo llevaron al abismo del exilio y la eterna condena.
                    </p>
                </Page2>

                {/* Pereza */}
                <Page3>
                    <img src={Sello} alt="Sello del diablo." className="mx-auto" />
                </Page3>
                <Page3>
                    <h2 className="text-4xl font-black text-red-800">Capítulo 5: PEREZA</h2>
                    <br />
                    <p className="text-lg font-gray-800">En este capítulo:
                        <br />
                        <span className="font-bold">Juan Carlos Monzón Rojas</span>
                    </p>
                </Page3>

                {/* Juan Carlos Monzón Rojas */}
                <Page1 img={CondenaJuan} character="Juan Carlos Monzón Rojas" sin="Capítulo 5: Pereza" position="Ex-Secretario de Vicepresidencia" sentence="Exilio" dept="MUCHO DINERO" />
                <Page2 crime="Corrupción y Engaño">
                    <p>
                        El exsecretario de la vicepresidencia fue declarado culpable en dos casos de corrupción durante el Gobierno del extinto Partido Patriota.
                    </p>
                    <p>
                        La pereza de Juan Carlos Monzón Rojas lo llevó por el sendero de la corrupción y el engaño, sembrando caos y desdicha en su camino, mientras su alma se consumía en la oscuridad de sus malas acciones.
                    </p>
                </Page2>

                {/* Ira */}
                <Page3>
                    <img src={Sello} alt="Sello del diablo." className="mx-auto" />
                </Page3>
                <Page3>
                    <h2 className="text-4xl font-black text-red-800">Capítulo 6: IRA</h2>
                    <br />
                    <p className="text-lg font-gray-800">En este capítulo:
                        <br />
                        <span className="font-bold">Acisclo Valladares Urruela</span>
                    </p>
                </Page3>

                {/* Acisclo Valladares Urruela */}
                <Page1 img={CondenaAcisclo} character="Acisclo Valladares Urruela" sin="Capítulo 6: IRA" position="Ex-Ministro de Economía" sentence="Exilio" dept="MUCHO DINERO" />
                <Page2 crime="Corrupción y Traición">
                    <p>
                        El exministro de Economía, Acisclo Valladares Urruela, reconoció haber usado el sistema bancario de Estados Unidos para hacer transacciones que terminaron en sobornos
                    </p>
                    <p>
                        La ira consumió el corazón de Acisclo Valladares Urruela, llevándolo por el camino de la corrupción y la traición, sellando su destino con la marca de la condena eterna.
                    </p>
                </Page2>

                {/* Miedo */}
                <Page3>
                    <img src={Sello} alt="Sello del diablo." className="mx-auto" />
                </Page3>
                <Page3>
                    <h2 className="text-4xl font-black text-red-800">Capítulo 7: MIEDO</h2>
                    <br />
                    <p className="text-lg font-gray-800">En este capítulo:
                        <br />
                        <span className="font-bold">Julio Antonio Juárez Ramírez</span>
                    </p>
                </Page3>

                {/* Julio Antonio Juárez Ramírez */}
                <Page1 img={CondenaJulio} character="Julio Antonio Juárez Ramírez" sin="Capítulo 7: Miedo" position="Ex-Diputado" sentence="Exilio" dept="Una vida" />
                <Page2 crime="Corrupción y Violencia">
                    <p>
                        El exdiputado Julio Antonio Juárez Ramírez sería, según la fiscalía, el autor intelectual del asesinato del periodista Danilo Efraín Zapón López.
                    </p>
                    <p>
                        El miedo fue su herramienta, y la corrupción su aliada. Julio Antonio Juárez Ramírez, con su alma manchada de oscuridad, sumió a su pueblo en el temor y la violencia, sellando su destino con la condena de una vida entera.
                    </p>
                </Page2>


                <div className="demoPage bg-gradient-to-t to-yellow-500 from-red-800 grid place-content-center text-center p-6">
                    <img src={Fuego} alt="" className="absolute bottom-0 right-0" />
                    <span className="text-xl md:hidden">Fin</span>
                </div>

            </HTMLFlipBook>
        </div >
    );
}

export default MyBook;