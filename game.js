const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

function showTextNodeStart(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    
  })
}


function selectOption(option) {
  const nextTextNodeId = option.nextText
  showTextNodeStart(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Ragnar: My sons and daughters, are you ready for a new adventure?',
    options: [
      {
        text: 'We are all prepared for the new destination and Valhalla Ragnar!',
        nextText: 2
      },
      {
        text: 'We need more time Ragnar with the resource',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Are you sure you need extra time ?',
    options: [
      {
        text: 'Ready to sail, and Odin will take care of us.',
        nextText: 3
      },
      {
        text: 'We can not wait any more time',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Ragnar: everything is ready now! What is the route we are going to take?',
    options: [
      {
        text: 'South West.',
        nextText: 4
      },
      {
        text: 'South-East.',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'We decided the route !',
    options: [
      {
        text: 'Ragnar to Bjorn: Following this route, we are to sail in a dangerous land occupied by the Celtic tribe and protected by her Gods.We can build a settlement on the west coast facing the Atlantic way of Ireland.',
        nextText: 5
      },
      {
        text: 'Following this route, we will raid the rich land of England ruled by four kings.',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Ragnar: all decided then, we are going to raid for "Skaal"!!!',
    options: [
      {
        text: 'Ireland.',
        nextText: 6
      },
      {
        text: 'England.',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'Ragnar: I have to tell you something before we proceed !',
    options: [
      {
        text: 'Ragnar, my warriors, we are almost there, ready axes and shields. I can see a temple where they pray their god. Leave the boats here, for the silver, for glory, and Valhalla go !!',
        nextText: 7
      },
      {
        text: 'We need to reach our settlement on the Atlantic way and recruit more Danes and weapons to invade England. We are not ready yet. Ireland would be the first goal.',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Ragnar: I see someone spying on us; what we are going to do?. We can not let them know about us. ',
    options: [
      {
        text: 'Capture the spy.',
        nextText: 8
      },
      {
        text: 'Kill the spy.',
        nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: 'Where is the spy ?',
    options: [
      {
        text: 'Floki, we capture the prisoner! Bjorn: I never seen a person dressed like this. Is he a warrior or an old sheep? Ragnar: No, Bjorn is a Monk, a priest, we can ask him without torturing where we can find silver on this beautiful land!!',
        nextText: 9
      },
      {
        text: 'Floki did not want to talk to us. We had to kill him because he started screaming, and it could be a problem if the tribes know about us. We can be outnumbered.',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'King Ragnar, we have found this letter from this man !! This letter talks about a beautiful Celtic princess that ruled this land called Erin.',
    options: [
      {
        text: 'Ragnar, I have an idea. We can try to talk with this Princess and asking for a peaceful place to settle before we are strong enough to take England. We need mercenaries and alliance for the Great Viking army. What do you think? Any idea for you, Floki and Bjorn?',
        nextText: 10
      },
      {
        text: 'Floki, exciting letter, but we can not attack and capture the Princess. It will be a suicide, young Bjorn !.',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'King Ragnar, with Floki and the young son Bjorn decided to agree to search for a talk and agreement with the Princess. Ragnar: we are almost there; listen to me, do not make a wrong move or attack someone. We are here for the Princess!',
    options: [
      {
        text: 'Hi, I am King Ragnar of Kattegat, a Viking warrior; we are here to talk with your Princess.',
        nextText: 11
      },
      {
        text: 'We can ask if they have a blacksmith to the Princess.',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'After few hours of trying to understand each other Viking with the Celtic tribes, the beautiful Princess made her appearance. Ragnar was capture by her beauty and elegance. Welcome, King Ragnar. I am the Princess Erin of Ireland and the first daughter of the legendary warrior Chuculain.',
    options: [
      {
        text: 'Floki whispering to Ragnar: Is she the real Chuculain daughters?. I hear about his saga, and he is a semi-god. We can ask for an alliance',
        nextText: 12
      },
      {
        text: 'Did you hear that? The daughter of a God on this land. We can ask for help with shield and weapons.',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: "Princess Erin to Ragnar, you are welcome with your warriors. We are going to celebrate tonight a new friendship with you, King Ragnar !! Are you agreed to a private conversation?",
    options: [
      {
        text:"I can not reject this proposal.",
        nextText: 13
      },
      {
        text:"Floki, let her know about our plan for the invasion of England.",
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: 'After the conversation, Ragnar and the Princess decided together to work for an alliance. They agreed about weapons and mercenaries for the great Viking army.',
    options: [
      {
        text: 'Floki and Bjorn asked what the prize for that was?',
        nextText: 14
      },
      {
        text: 'A toast to the new friendship and alliance !! Long live to the Princess.',
        nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: 'Ragnar was almost there, and The Great Heathen Army was ready to invade England in 875. They agreed with the Princess. If Ragnar was victorious after returning from England, the prize to pay was a marriage with her.',
    options: [
      {
        text: ' Floki, we need more ships before we sail !!',
        nextText: 15
      },
      {
        text: 'We are ready to sail.',
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: 'Ragnar was at the head of the great army. My comrades, friends, family, this will be the most significant battle of our history. We will be immortal legends Odin will protect all of us, but Valhalla is right the corner !',
    options: [
      {
        text: 'Ready, shield and weapons',
        nextText: 16
      },
      {
        text: 'We have arrived in England. I can see an army.',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'Ragnar, they built the wall and throwing arrows.  Floki asked, how are you going to face them?',
    options: [
      {
        text: 'We are going to surround them and hit them back! Kill them all, kill them all.',
        nextText: 17
      },
      {
        text: 'We build a shield. Their arrows are deadly. We must be careful, Ragnar! Odin told me we would win this battle !!',
        nextText: 17
      }
    ]
  },
  {
    id: 17,
    text: 'Floki and Bjorn laughing to Ragnar: We almost won the battle, we are the most excellent Vikings ever lived in this Age, and our name will be remembered forever! One after one, the four kings of England fallen under Ragnar axe!',
    options: [
      {
        text: 'Floki, I\'m tired, Ragnar, but happy!',
        nextText: 18
      },
      {
        text: 'Our brother will settle here now, without King Alfred will rule over here !! Skaal',
        nextText: 18
      }
    ]
  },
  {
    id: 18,
    text: 'The battle was over, and Ragnar was back for celebrating his victory with the Queen of Ireland Erin, bringing back silver and gold for the Celtic tribes that helped to prepare this greatest battle. Now, is the moment to choose King Ragnar said the Princes as agreed?',
    options: [
      {
        text: 'Ragnar decide to get back in the Danish land and being recognized as the only King of the Viking and get back his life.',
        nextText: 19
      },
      {
        text: 'Leave the crown to the young son Bjorn who fought beside him and Floki during the invasion of England.',
        nextText: 19
      }
    ]
  },
  {
    id: 19,
    text: 'The battle was over, and Ragnar was back for celebrating his victory with the Queen of Ireland Erin, bringing back silver and gold for the Celtic tribes that helped to prepare this greatest battle. Now, is the moment to choose King Ragnar said the Princes as agreed?',
    options: [
      {
        text: 'Ragnar, after the battle, decides to stay in Ireland to marry the Princess, Erin. The first wife passed away. Also, Floki and Bjorn agreed with him for a new life. So King Ragnar leave the crown for Bjorn and settle there. He was happy to start a new life far away from the land where he grew big and strong, making him the most famous Viking hero of all time.',
        nextText: 20
      },
      {
        text: 'Ragnar was in love with the Irish Princess but decided to get back in the Viking land to be recognized as the greatest King. All the small clans agreed to the crown. Ragnar took back the silver and gold to fortified Kattegat in case of a future invasion. People were happy with this new King. Ragnar Lootbrok from this day will be remembered as the most famous Viking Hero of all time !!! ',
        nextText: 20
      }
    ]
  },
  {
    id: 20,
    text: 'End of story!'
  },
]


showTextNodeStart(1);