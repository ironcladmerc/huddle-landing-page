function Content() {
    return (
        <div className="flex flex-col space-y-10 p-5 justify-center items-center md:items-start mx-auto w-2/3 md:w-full">
            <div>
                <img src="logo.svg" alt="logo" className="w-1/2" />
            </div>
            <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:items-start">
                <img
                    src="illustration-mockups.svg"
                    alt="illustration"
                    className="w-72 md:w-1/2"
                />
                <div className="flex flex-col items-center text-center space-y-5 md:w-96 md:text-left md:items-start md:flex-1">
                    <h2 className="font-poppins font-semiBold text-xl text-white md:text-2xl">
                        Build The Community Your Fans Will Love
                    </h2>
                    <p className="font-openSans font-regular text-white text-sm leading-relaxed">
                        Huddle re-imagines the way we build communities. You
                        have a voice, but so does your audience. Create
                        connections with your users as you engage in genuine
                        discussion.
                    </p>
                    <div className="bg-white w-2/3 py-2 rounded-full text-xs text-violet shadow-xl md:text-center md:w-1/3 md:py-3">
                        Register
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
