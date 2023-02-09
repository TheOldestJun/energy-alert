const Level = (props) => {
    const { label } = props;
    return (
        <div className='flex align-middle items-center text-center'>
            <div className='text-center font-black text-9xl text-red-600 mx-auto'>
                {label.toString()}
            </div>
        </div>
    );
};

export default Level;
