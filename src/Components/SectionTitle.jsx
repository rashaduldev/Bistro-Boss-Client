

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=" mb-5 md:w-4/12 mx-auto mt-10">
            <p className="text-yellow-500 mx-auto text-center">------{subHeading}------</p>
            <h3 className="text-4xl uppercase border-y-4 py-4 text-center my-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;