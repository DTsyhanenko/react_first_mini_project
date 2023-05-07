import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section class="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}
                                description="At vero eos et accusam et justo duo dolores et ea rebum." 
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImage}
                                description="At vero eos et accusam et justo duo dolores et ea rebum."  
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="At vero eos et accusam et justo duo dolores et ea rebum."  
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;