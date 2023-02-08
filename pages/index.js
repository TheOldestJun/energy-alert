import axios from "axios";
import { useState } from "react";
import Progress from "../components/Progress";

export default function Home(props) {
    const [phaseOne, setPhaseOne] = useState(90);
    return (
        <>
            <main>
                <div className='container mx-auto my-5'>
                    <h1 className='text-3xl font-bold underline text-center'>
                        Welcome to energy alert!
                    </h1>
                    <Progress name='Phase 1' value={phaseOne} />
                </div>
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const devId = process.env.DEVID;
    const apiKey = process.env.APIKEY;
    const phaseOne = await axios.get(``);
    return {
        props: {}, // will be passed to the page component as props
    };
}