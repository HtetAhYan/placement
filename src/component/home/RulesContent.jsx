import React from 'react';
import { Fab, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { rules } from '@/data/Rules';

function RulesContent() {
  return (
    <div className=" overflow-y-auto rules h-[550px] sm:h-max sm:p-10">
      <List >
        {rules.map((rule) => (
          <ListItem key={rule.id} className='items-start mt-2 sm:mt-0 rule block lg:flex'>
          
  
              <h1 className={rule.id !== 'Kindly Note' ? 'font-semibold  text-[#000000]  text-2xl min-w-[100%]  lg:min-w-[15%] ruleIcon' : 'ruleIcon ruleIconBg font-semibold text-2xl min-w-[15%] text-red-500'} >{rule.id}</h1>
         {rule.value !== 'last' ? <h1 className={'font-semibold text-center sm:block hidden text-sm lg:text-3xl ml-2 min-w-[5%]'}>-</h1>:<h1 className={'font-semibold hidden ml-2 min-w-[5%]'}></h1> }   
          {rule.value !== 'last' ? <h1 className='font-teko text-[#0e1129] text-[14px] font-semibold m-0 sm:text-2xl sm:ml-8 ruleLabel '>{rule.label}</h1>
:            <h1 className='font-teko text-gray-800 text-md sm:text-xl ml-8 ruleLabel '>{rule.label}</h1>
 }   
         
          </ListItem> 
        ))}
      </List>
    </div>
  );
}

export default RulesContent;
