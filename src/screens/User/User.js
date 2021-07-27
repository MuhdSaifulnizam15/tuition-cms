import React from 'react';
import BreadCrumb from 'components/BreadCrumb';
import { Card, Image, Table } from '@themesberg/react-bootstrap';
import { pageRanking } from 'data/tables';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function User() {

    const ValueChange = ({ value, suffix }) => {
        const valueIcon = value < 0 ? faAngleDown : faAngleUp;
        const valueTxtColor = value < 0 ? "text-danger" : "text-success";
    
        return (
            value ? <span className={valueTxtColor}>
                <FontAwesomeIcon icon={valueIcon} />
                <span className="fw-bold ms-1">
                {Math.abs(value)}{suffix}
                </span>
            </span> : "--"
        );
    };

    const TableRow = (props) => {
        const { country, countryImage, overallRank, overallRankChange, travelRank, travelRankChange, widgetsRank, widgetsRankChange } = props;

        return (
            <tr>
                <td className="border-0">
                    <Card.Link href="#" className="d-flex align-items-center">
                    <Image src={countryImage} className="image-small rounded-circle me-2" />
                    <div><span className="h6">{country}</span></div>
                    </Card.Link>
                </td>
                <td className="fw-bold border-0">
                    {overallRank ? overallRank : "-"}
                </td>
                <td className="border-0">
                    <ValueChange value={overallRankChange} />
                </td>
                <td className="fw-bold border-0">
                    {travelRank ? travelRank : "-"}
                </td>
                <td className="border-0">
                    <ValueChange value={travelRankChange} />
                </td>
            </tr>
        );
    };

    return (
        <>
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <BreadCrumb firstItem="All Users" title="All Users" />
            </div>

            <Card border="light" className="shadow-sm">
                <Card.Body className="pb-0">
                    <Table responsive className="table-centered table-nowrap rounded mb-0">
                        <thead className="thead-light">
                            <tr>
                            <th className="border-0">First Name</th>
                            <th className="border-0">Last Name</th>
                            <th className="border-0">Email</th>
                            <th className="border-0">Role</th>
                            <th className="border-0">Is Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pageRanking.map(r => <TableRow key={`ranking-${r.id}`} {...r} />)}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
}