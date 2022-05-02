import { colors } from '@mui/material';

import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// nivel de satisfacción
export const MUY_TRISTE = 2;
export const TRISTE = 4;
export const NEUTRAL = 6;
export const BIEN = 8;

// niveles de caras
export const CARA_MUY_TRISTE = 1;
export const CARA_TRISTE = 2;
export const CARA_NEUTRAL = 3;
export const CARA_BIEN = 4;
export const CARA_MUY_BIEN = 5;

export const FACES = [
  {
    value: CARA_MUY_TRISTE,
    label: 'Muy insatisfecho (0-2]',
    color: colors.red.A700,
    icon: SentimentVeryDissatisfiedIcon,
  },
  {
    value: CARA_TRISTE,
    label: 'Insatisfecho (2-4]',
    color: colors.red.A200,
    icon: SentimentDissatisfiedIcon,
  },
  {
    value: CARA_NEUTRAL,
    label: 'Neutral (4-6]',
    color: colors.yellow.A700,
    icon: SentimentNeutralIcon,
  },
  {
    value: CARA_BIEN,
    label: 'Satisfecho (6-8]',
    color: colors.green.A400,
    icon: SentimentSatisfiedIcon,
  },
  {
    value: CARA_MUY_BIEN,
    label: 'Muy Satisfecho > 8',
    color: colors.green.A700,
    icon: SentimentVerySatisfiedIcon,
  },
];
