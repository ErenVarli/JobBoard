
import React, { Component, useEffect, useState } from 'react';
import Card from '../components/card/CardCompany';
//import '../style/index.css';
import axios from 'axios';
import Button from '../components/button/Button';
import NavbarAdmin from '../components/navbar/NavbarAdmin';

export interface Companies {
    company_id: number;
    name: string;
    email: string;
    password: string;
}


export default function CompanyAdmin() {
    const [company, setCompany] = useState<Companies[] | null>(null);
    const [modifyCompanies, setModifyCompanies] = useState<number | null>(null);

    useEffect(() => {
        axios.get('http://finejob/frontend/companies')
            .then(response=> {
                setCompany((response.data));
            });
    }, []);

    const handleModifyClick = (company_id: number) => {
        setModifyCompanies(company_id);
    }
    return (
        <><NavbarAdmin />
            <div style={{ marginLeft: "20%" }}>

            <div className="postsAdmin">
                <Button className='btn-admin btn-creat-ad'>CREATE NEW COMPANY</Button>
                <div className="card-containerAdmin">
                    {
                    company &&
                    company.map(company => {
                        return <Card 
                            key={company.company_id}
                            company_id={company.company_id}
                            name={company.name} 
                            email={company.email} 
                            password={company.password} 
                            companies={company}
                            isModify={modifyCompanies == company.company_id}
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
