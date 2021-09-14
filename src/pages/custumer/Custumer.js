import {useParams} from "react-router-dom"
import { members } from "../../members"
import {Link} from "react-router-dom"

function Custumer(){
    const {id} = useParams()
    const member = (members.find((member) => member.id === id))
    return(
        <div>
            <h1>Detalhes do cliente</h1>
            <p>
                Nome: {member?.name}
            </p>
            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}
export default Custumer