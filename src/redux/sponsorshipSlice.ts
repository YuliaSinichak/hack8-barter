import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { iSellingPoint } from '@/types';

const sellingPoints: iSellingPoint[] = [
    {
        compulsory: true,
        active: true,
        name: 'Пакет 1',
        price: 'до 2000',
        annotation: '',
        services: [
            `Промоція в Instagram story`,
            `Згадка про компанію в постпроєктному відео`,
            `Розміщення банеру на місці події`,
        ]
    },
    {
        compulsory: true,
        active: false,
        name: 'Пакет 2',
        price: '2000-8000',
        annotation: "",
        services: [
            'Лого на бренд-воллі',
            `Промоція в Instagram-story`,
            `Згадка в постпроєктному відео`,
            `Транслювання відеоролика на місці події`,
            `Розміщення банеру на місці події`,
        ]
    },
    {
        compulsory: true,
        active: false,
        name: 'Пакет 3',
        price: '8000+',
        annotation: '',
        services: [
            'Лого на бренд-воллі',
            `Інтерактивні Instagram stories`,
            `Згадка в постпроєктному відео`,
            `Транслювання відеоролика на місці події`,
            `Розміщення банеру на місці події`,
            `Пост-дайджест у тґ`,
            `Участь у нетворкінгу`,
        ]
    },
]

// Initialize chosenSponsorships with compulsory items
const initialState = sellingPoints

const sponsorshipSlice = createSlice({
    name: 'sponsorship',
    initialState,
    reducers: {
        toggleSponsorship: (state, action: PayloadAction<{ name: string }>) => {
            const { name } = action.payload;
            const sponsorship = state.find(sp => sp.name === name);

            // Disable all sponsorships
            state.forEach(sp => sp.active = false);

            if (sponsorship) {
                sponsorship.active = true;
            }
        },
    },
});

export const { toggleSponsorship } = sponsorshipSlice.actions;

export default sponsorshipSlice.reducer;
