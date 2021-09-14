import { Link } from "react-router-dom"

function Home({members}){
    return(
        <div className='members'>
            <h1>Lista de clientes e empresas</h1>
            {members.map((member) => (
                <Link to={member.type === 'pj' ? `/company/${member.id}` : `/customer/${member.id}`}>
                    {member.name}
                </Link>
            ))}
        </div>
    )
}

export default Home