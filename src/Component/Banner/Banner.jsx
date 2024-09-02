

const Banner = () => {
    return (
        <div className="flex bg-[#F3F3F3] dark:bg-transparent justify-center app-container my-10 py-14 px-5 gap-8 items-center rounded shadow border border-sky-800">
            <div className="md:px-18 mx-auto md:w-6/12">
                <h1 className="text-6xl font-semibold">Books to freshen up your bookshelf</h1>
                <p className="my-7">Books are our that kind of friend that never cheat and not a lost project.Its remove deprasion, anxity and that kind of things. </p>
                <div>
                    <button className="btn bg-[#23BE0A] text-white px-5">View the list</button>
                </div>
            </div>
            <div className="mx-auto w-5/12">
                <img className="mx-auto" src="../../../src/img/pngwing 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;