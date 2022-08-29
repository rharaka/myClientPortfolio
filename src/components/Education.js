import React from 'react'

const Education = () => {
    return (
        <>
            <h1>Education</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                        SKILLS
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            <h4><p className="text-primary">Technologies</p></h4>
                            <h5><strong>PHP/MySQL, HTML/CSS, JAVASCRIPT, ORACLE, MS SQL, Bootstrap, JQuery, Angular, React, 
                                Node, CakePHP, Symfony, Joomla, Wordpress, Magento, Drupal.</strong></h5>
                        </div>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            <h4><p className="text-primary">Graphics basic knowledge</p></h4>
                            <h5><strong>PHOTOSHOP, ILLUSTRATOR</strong></h5>
                        </div>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            <h4><p className="text-primary">Analytical Methods</p></h4>
                            <h5><strong>Merise, UML.</strong></h5>
                        </div>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            <h4><p className="text-primary">Microsoft Office</p></h4>
                            <h5><strong>Access, Word, Excel, PowerPoint.</strong></h5>
                        </div>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            <h4><p className="text-primary">Operating Systems</p></h4>
                            <h5><strong>Windows 95, Windows NT4, Windows 98 SE, Windows XP, Windows 7, Linux, MAC.</strong></h5>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                        Software Engineering
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            <h4><p className="text-primary">2008 - 2011</p></h4>
                            <h5><strong>School of Advanced Studies in Information Systems Engineering</strong></h5>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                        Diploma of Technician Specializes in software development
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{}}>
                    <div className="accordion-body">
                        <h4><p className="text-primary">2006 - 2008</p></h4>
                        <h5><strong>COMPLEX of Formation Offshoring jobs and Technology of the Information</strong></h5>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                        Diploma of Technician Specializes in Electromechanical Maintenance
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h4><p className="text-primary">2004 - 2006</p></h4>
                        <h5><strong>COMPLEX of Formation FOOD and Plastics</strong></h5>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingFour">
                        Baccalaureate in Experimental Sciences
                    </h3>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h4><p className="text-primary">2003</p></h4>
                        <h5><strong>Secondery School Arriyaddiyine, Casablanca, Morocco </strong></h5>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education