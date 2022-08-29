import React from 'react'

const Home = () => {
    return (
        <>
            <h1>Rachid HARAKA</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2><img src={process.env.PUBLIC_URL+"photo.png"} alt="Rachid HARAKA" width="10%" /></h2>
                    <h3 className="accordion-header" id="headingOne">
                        Web Developer
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            <h4><p className="text-primary">Webistes & Webapps</p></h4>
                            <h5><strong>After graduating in computer science, I was able to deep my IT skills and I was able to work optimally in very heterogeneous teams from the point of view of professionalism. I am specialized in the programming of websites & web applications.</strong></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
