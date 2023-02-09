import axios from "axios";

const Data = async (req, res) => {
    const devId = process.env.DEVID;
    const apiKey = process.env.APIKEY;
    const { period, dateBegin, dateEnd } = req.body;
    try {
        const rawData = await axios.get(
            `https://dash.smart-maic.com/api?apikey=${apiKey}&period=${period}&devid=${devId}&date1=${dateBegin}&date2=${dateEnd}`,
        );
        const data = [
            rawData.data[0].W1,
            rawData.data[0].W2,
            rawData.data[0].W3,
        ];
        console.log(data);
        res.status(200).send(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

export default Data;
