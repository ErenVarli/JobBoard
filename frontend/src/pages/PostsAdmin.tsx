import React, { Component, useEffect, useState } from 'react';
import Card from '../components/card/CardAdmin';
//import '../style/index.css';
import axios from 'axios';
import Button from '../components/button/Button';
import NavbarAdmin from '../components/navbar/NavbarAdmin';

export interface Ad {
    ad_id: number;
    title: string;
    company_id: string;
    type_contract: string;
    description: string;
}


export default function PostsAdmin() {
    const [ad, setAd] = useState<Ad[] | null>(null);
    const [modifyAd, setModifyAd] = useState<number | null>(null);

    useEffect(() => {
    axios.get('http://finejob/frontend/posts')
        .then(response=> {
            setAd((response.data));
        });
    }, []);

    const handleModifyClick = (ad_id: number) => {
        setModifyAd(ad_id);
    }
    return (
        <><NavbarAdmin />
            <div style={{ marginLeft: "20%" }}>    
                <div className="postsAdmin">
                    <Button className='btn-admin btn-creat-ad'>CREATE NEW AD</Button>
                    <div className="card-containerAdmin">
                        {
                        ad &&
                        ad.map(ad => {
                            return <Card 
                                key={ad.ad_id}
                                ad_id={ad.ad_id}
                                title={ad.title} 
                                company={ad.company_id} 
                                contract={ad.type_contract} 
                                description={ad.description} 
                                ad={ad}
                                isModify={modifyAd == ad.ad_id}
                                modifyClick={handleModifyClick}
                                />
                        })
                        }
                    </div>

                </div>
            </div>
        </>
    );
}
