import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../LandingForm/index.css'
import { accordionData } from '../../constants/constant';

export default function AccordionTransition() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {accordionData.map((accordion) => (
        <Accordion
          key={accordion.id}
          expanded={expanded === accordion.id}
          onChange={handleExpansion(accordion.id)}
          sx={{
            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
            marginBottom: '10px' ,
            boxShadow: '0px 0px 0px 2px #fff2f5'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${accordion.id}-content`}
            id={`panel${accordion.id}-header`}
            sx={{ backgroundColor: "#fff2f5"}}
          >
            <Typography>{accordion.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {accordion.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
