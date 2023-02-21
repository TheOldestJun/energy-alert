import axios from "axios";
import { useState, useEffect } from "react";
import Progress from "../components/Progress";
import Level from "../components/Level";

export default function Home(props) {
    const { phaseOne, phaseTwo, phaseThree } = props;
    const [total, setTotal] = useState(
        (phaseOne + phaseTwo + phaseThree) / 1000,
    );

    setInterval(async () => {
        let date = new Date();
        let dateEnd = Date.parse(date) / 1000;
        let dateBegin = dateEnd - 60;
        try {
            let result = await axios.get(`/api/data`, {
                period: "minute",
                dateBegin: dateBegin,
                dateEnd: dateEnd,
            });
            let sumTotal =
                (result.data[0] + result.data[1] + result.data[2]) / 1000;
            setTotal(sumTotal);
        } catch (error) {
            console.log("ERROR ON FRONT!!!");
        }
    }, 65000);

    return (
        <>
            <main>
                <div className='container mx-auto my-5'>
                    <h1 className='text-3xl font-bold underline text-center'>
                        Welcome to energy alert!
                    </h1>
                    <div className='flex flex-row'>
                        <Progress name='Phase 1' value={phaseOne / 1000} />
                        <Progress name='Phase 2' value={phaseTwo / 1000} />
                        <Progress name='Phase 3' value={phaseThree / 1000} />
                    </div>
                    {total}
                    <Level label={total} />
                </div>
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const devId = process.env.DEVID;
    const apiKey = process.env.APIKEY;
    const data = await axios.get(
        `https://dash.smart-maic.com/api?apikey=${apiKey}&period=hour&devid=${devId}&date1=1675839600&date2=1675854000`,
    );
    return {
        props: {
            phaseOne: data.data[0].W1,
            phaseTwo: data.data[0].W2,
            phaseThree: data.data[0].W3,
        }, // will be passed to the page component as props
    };
}
