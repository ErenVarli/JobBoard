import React, {useState} from 'react';
import Button from '../button/Button';
import pencilIcon from '../../assets/images/pencil.png';
import { Companies } from '../../pages/CompanyDashboard';
//import '../../style/admin.css';
interface CardProps {
    company_id: number;
    name: string;
    email: string;
    password: string;
    companies: Companies;
    isModify: boolean;
    modifyClick: (company_id: number) => void;
}

const Card: React.FC<CardProps> = ({ company_id, name, email, password, companies, isModify, modifyClick }) => {
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
                            <p className="company-name">{name}</p>
                        </div>
                        <Button className="btn-admin details" onClick={handleDetailsClick}>Details</Button>
                        <Button className="btn-admin modify" onClick={() => modifyClick(company_id)}>
                            <img src={pencilIcon} alt="Modify" className='img-modify' />
                        </Button>
                        <form className="deleteForm" method="post" action="http://finejob/backend/companies/validationSupression" >
                            <input type="hidden" name="company_id" value={company_id} />
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
                <form method="post" className="editCardAdmin" action="http://finejob/backend/companies/modification">
                    <div>
                        <div className='visible-card'>
                            <div className='header-card'>    
                                <textarea className="textarea name" name="name">{name}</textarea>
                                
                            </div>
                        </div>
                        <div className='card-detail'>
                            <textarea className="textarea email" name="email">{email}</textarea>
                            <textarea className="textarea password" name="password">{password}</textarea>
                            </div>
                        <input type="hidden" name="company_id" value={company_id} />
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