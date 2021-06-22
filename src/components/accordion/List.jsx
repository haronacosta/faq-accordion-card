import React, { useState } from 'react';
import Item from './Item';

const List = () => {
  const [active, setActive] = useState(false);

  const data = [
    {
      id: 1,
      title: 'How many team members can I invite?',
      text: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
      id: 2,
      title: 'What is the maximum file upload size?',
      text: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      id: 3,
      title: 'How do I reset my password?',
      text: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
      id: 4,
      title: 'Can I cancel my subscription?',
      text: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
      id: 5,
      title: 'Do you provide additional support?',
      text: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
  ];

  return (
    <div className='List'>
      <div className='List__title'>FAQ</div>
      <div className='List__items_wrapper'>
        {data.map((data) => (
          <Item
            key={data.id}
            id={data.id}
            active={active}
            {...data}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
