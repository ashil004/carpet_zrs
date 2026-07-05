

const Userdetils = ({ usersData }) => {
    const { email, password, _id } = usersData;
    return (
        <div>

            <div className="card  bg-white shadow-xl py-4 ">
                <div className="card-body">
                    
                    <h2 className="text-sm">User id:{_id}</h2>
                    <h3 className="text-sm">User:{email}</h3>

                </div>
            </div>

        </div>
    );
};

export default Userdetils;

