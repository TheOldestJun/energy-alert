const Progress = (props) => {
    const { name, value } = props;
    return (
        <>
            <div className='container'>
                <h1>{name}</h1>
                <progress max={100} value={value}></progress>
            </div>
        </>
    );
};

export default Progress;
