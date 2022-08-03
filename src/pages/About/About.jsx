import React from "react";
import './About.css'

export function About() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-6">
                        <img className="about_page_img" src="/img/samuel.jpg" alt=""/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <h1>Samuel Mariano Belo</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie congue egestas. Vivamus congue ipsum leo, elementum elementum nisl tempor sit amet. Nullam semper ornare diam quis pharetra. Nunc mattis felis eget tempus tempus. In a lobortis dolor. Suspendisse aliquet nisi feugiat gravida bibendum. Vestibulum ultrices augue tempus dui imperdiet iaculis. Nam rhoncus suscipit orci ut porttitor.
                        </p>
                        <p>
                        Pellentesque nec augue sit amet augue suscipit accumsan. Nam laoreet tristique ante egestas sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac accumsan velit. Duis porta nisl ut ornare elementum. In eu nunc elit. Morbi aliquam dolor venenatis lectus tristique, in viverra felis maximus. Nam aliquet, orci quis viverra sagittis, leo enim tempus mi, eu tincidunt libero erat sed metus. Etiam fermentum, nisl quis pretium vulputate, leo est dictum metus, sed hendrerit leo libero sed enim. Etiam eget interdum massa, sit amet vestibulum mi. In at eros id quam molestie vestibulum. Phasellus quis scelerisque dui. Nunc commodo arcu ut consectetur accumsan. Curabitur pulvinar nisl ac faucibus cursus.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h3 className="text-center my-5">Experiência profissional:</h3>
                </div>
                <h3 className="text-center my-5">Tecnologias que utilizo.</h3>
                <div className="row g-3 text-center my-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/php.png" alt="php" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/laravel.png" alt="laravel" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/js.png" alt="javascript" />
                    </div>
                </div>
                <div className="row g-3 text-center my-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/nodejs.png" alt="nodejs" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/react.png" alt="react" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/bootstrap.png" alt="bootstrap" />
                    </div>
                </div>
                <div className="row g-3 text-center my-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/mysql.png" alt="mysql" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/ubuntu.png" alt="ubuntu" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="tech_img" src="img/postgre.png" alt="postgresql" />
                    </div>
                </div>
            </div>
        </div>
    )
}