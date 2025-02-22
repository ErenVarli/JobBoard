import React, {useState} from 'react';
import Button from '../button/Button';
import pencilIcon from '../../assets/images/pencil.png';
import { Ad } from '../../pages/PostsAdmin';
//import '../../style/admin.css';
interface CardProps {
    ad_id: number;
    title: string;
    company: string;
    contract: string;
    description: string;
    ad: Ad;
    isModify: boolean;
    modifyClick: (ad_id: number) => void;
}

const Card: React.FC<CardProps> = ({ ad_id, title, company, contract, description, ad, isModify, modifyClick }) => {
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
                            <p className="title-job">{title}</p>
                            <p className="company-name">{company}</p>
                        </div>
                        <Button className="btn-admin details" onClick={handleDetailsClick}>Details</Button>
                        <Button className="btn-admin modify" onClick={() => modifyClick(ad_id)}>
                            <img src={pencilIcon} alt="Modify" className='img-modify' />
                        </Button>
                        <form className="deleteForm" method="post" action="http://finejob/backend/ad/validationSupression" >
                            <input type="hidden" name="ad_id" value={ad_id} />
                            <Button className="btn-admin delete">
                                Delete
                            </Button>
                        </form>
                    </div>
                    {showDetails && (
                        <div className='card-details'>
                            <p className="card-contract">{contract}</p>
                            <p className="card-description">{description}</p>
                        </div>
                    )}
                </>
            ) : (
                <form method="post" className="editCardAdmin" action="http://finejob/backend/ad/modification">
                    <div>
                        <div className='visible-card'>
                            <div className='header-card'>    
                                <textarea className="textarea title" name="title">{title}</textarea>
                                <textarea className="textarea company" name="company">{company}</textarea>
                            </div>
                        </div>
                        <div className='card-detail'>
                            <textarea className="textarea contract" name="contract">{contract}</textarea>
                            <textarea className="textarea description" name="description">{description}</textarea>
                        </div>
                        <input type="hidden" name="ad_id" value={ad_id} />
                        <Button className="btn-admin validate" >
                                Valider
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Card;