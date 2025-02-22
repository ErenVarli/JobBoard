import React, {useState} from 'react';
import Button from '../button/Button';
import pencilIcon from '../../assets/images/pencil.png';
import { Peoples } from '../../pages/UsersDashboard';
//import '../../style/admin.css';
interface CardProps {
    people_id: number;
    last_name: string;
    first_name: string;
    email: string;
    password: string;
    peoples: Peoples;
    isModify: boolean;
    modifyClick: (company_id: number) => void;
}

const Card: React.FC<CardProps> = ({ people_id, last_name, first_name, email, password, peoples, isModify, modifyClick }) => {
    // state poour afficher ou non les détails de la card
    const [showDetails, setShowDetails] = useState(false);
    // fonction qui gere le clique du details
    // on passe toujours par le set pour modifier la const
    const handleDetailsClick = () => {
        setShowDetails(!showDetails); 
    };
  
    return (
        <div className="cardAdmin">
            {(!isModify) ? (
                <>
                    <div className='visible-card'>
                        <div className='header-card'>    
                            <p className="company-name">{last_name}</p>
                            <p className="company-name">{first_name}</p>
                        </div>
                        <Button className="btn-admin details" onClick={handleDetailsClick}>Details</Button>
                        <Button className="btn-admin modify" onClick={() => modifyClick(people_id)}>
                            <img src={pencilIcon} alt="Modify" className='img-modify' />
                        </Button>
                        <form className="deleteForm" method="post" action="http://finejob/backend/peoples/validationSupression" >
                            <input type="hidden" name="company_id" value={people_id} />
                            <Button className="btn-admin delete">
                                Delete
                            </Button>
                        </form>
                    </div>
                    {showDetails && (
                        <div className='card-details'>
                            <p className="card-contract">{email}</p>
                            <p className="card-description">{password}</p>
                        </div>
                    )}
                </>
            ) : (
                <form method="post" className="editCardAdmin" action="http://finejob/backend/peoples/modification">
                    <div>
                        <div className='visible-card'>
                            <div className='header-card'>    
                                <textarea className="textarea name" name="last_name">{last_name}</textarea>
                                <textarea className="textarea name" name="first_name">{first_name}</textarea>
                            </div>
                        </div>
                        <div className='card-detail'>
                            <textarea className="textarea email" name="email">{email}</textarea>
                            <textarea className="textarea password" name="password">{password}</textarea>
                            </div>
                        <input type="hidden" name="people_id" value={people_id} />
                        <Button className="btn-admin validate">
                                Valider
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Card;