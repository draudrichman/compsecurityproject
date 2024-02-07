'use client';

import { format } from "date-fns";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { LineChart } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';




interface StatisticsClientProps {
    reservations?: SafeReservation[];
    currentUser?: SafeUser | null;
    listing: SafeListing;
}

const StatisticsClient: React.FC<StatisticsClientProps> = ({
    currentUser,
    reservations = [],
    listing
}) => {
    // Extracting date elements and calculating sum of starting dates
    const revenue = reservations.map((reservation) => reservation.totalPrice);
    const dates = reservations.map((reservation) => new Date(reservation.createdAt));

    const valueFormatter = (date: Date) =>
    date.getHours() === 0
        ? date.toLocaleDateString('fr-FR', {
            month: '2-digit',
            day: '2-digit',
        })
        : date.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
        });

    const config = {
    series: [{ data: revenue }],
    height: 300,
    };
    const xAxisCommon = {
    data: dates,
    scaleType: 'time',
    valueFormatter,
    } as const;
    

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
                <Heading
                    center
                    title="Property Insights"
                    subtitle="Explore trends and analytics for your property"
                />
                <Box sx={{ width: '100%', maxWidth: 800 }}>
                    <LineChart
                        xAxis={[
                        {
                            ...xAxisCommon,
                            tickMinStep: 3600 * 1000 * 12, // min step: 24h
                        }
                        ]}
                        {...config}
                    />
                </Box>
            </div>
        </Container>
    );
}

export default StatisticsClient;