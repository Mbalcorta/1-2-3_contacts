'use strict'
// here is where you'll store your contacts
let contactStorage = []

const compare = (a, b) => {

  const fullNameA = a.first_name
  const fullNameB = b.first_name

  if (fullNameA < fullNameB) {
    return -1
  }
  if(fullNameA > fullNameB){
    return 1
  }
  return 0
}
/*
 * addContact
 *
 *  Arguments:
 *    firstName: String (required)
 *    lastName: String (required)
 *    email: String (required)
 *
 *  Example Usage:
 *    addContact('Betty', 'Holberton', 'betty.holberton@eniac.edu')
 *
 *  Returns:
 *    undefined
 */
const addContact = (firstName, lastName, email) => {
  contactStorage.push({first_name: firstName, lastName: lastName, email: email});
  console.log('...Finished loading contact data.')
  if(contactStorage.length > 1){
    contactStorage.sort(compare)
  }
}

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        'first_name': 'Tanny',
 *        'last_name': 'Vibert',
 *        'email': 'tvibert0@illinois.edu',
 *      },
 *      {
 *        'first_name': 'Tova',
 *        'last_name': 'Myall',
 *        'email': 'tmyall1@instagram.com',
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */



const addContacts = (contacts) => {
  contacts.forEach((eachObject)=> {
    contactStorage.push(eachObject)
  })
  contactStorage.sort(compare);
console.log('...Finished loading contact data.')
}

/*
 * printContacts
 *
 *  Arguments:
 *    none
 *
 *  Example Usage:
 *    addContacts()
 *
 *  Note: output goes to STDOUT using console.log
 *
 *  Returns:
 *    undefined
 */
const findMaxLengthOfColumns = (arrayOfContacts) => {
  let columnLengths = {
    fullNameLength: 0,
    emailAddressLength: 0
  }
  let fullNames = []
  let emailAddresses = []


  arrayOfContacts.forEach((eachObject)=>{
    fullNames.push(eachObject.first_name +' '+eachObject.lastName)
    emailAddresses.push(eachObject.email)
  })

//first make function that finds max length of String
  var longestLength = (arrayList)=>{
    return arrayList.sort((a, b) => {
      return b.length - a.length
    })[0].length;
  }
  const fullNameLength = longestLength(fullNames)
  const emailLength = longestLength(emailAddresses)

  const updateLengthsObject = (targetObjectProp, columnLength) => {
    if(columnLengths[targetObjectProp] < columnLength) {
      columnLengths[targetObjectProp] = columnLength
    }
  }

  updateLengthsObject('fullNameLength', fullNameLength)
  updateLengthsObject('emailAddressLength', emailLength)

  return columnLengths
}

 //takes into consideration the size of input name and email address
const header = (maxColumnLengths) => {
  const horizontal_line = '|'+'-'.repeat(maxColumnLengths.fullNameLength+2)+'+'
  +'-'.repeat(maxColumnLengths.emailAddressLength+2)+'|'

  console.log(horizontal_line)
  console.log('| '+'Full Name'+' '.repeat(maxColumnLengths.fullNameLength+1-'Full Name'.length)+'|'
  +'Email Address'+' '.repeat(maxColumnLengths.emailAddressLength+1-'Email Address'.length)+' |')

  console.log(horizontal_line)
  return horizontal_line
}

const fillTable = (arrayOfContactObjects, maxLengthOfColumns) => {
  let fullName =''
  let email =''

  arrayOfContactObjects.forEach((eachObject)=> {
    fullName += eachObject.first_name +' '+eachObject.lastName
    email += eachObject.email
  })
  console.log('| '+fullName+' '.repeat(maxLengthOfColumns.fullNameLength+1-fullName.length)+'| '
  +email+' '.repeat(maxLengthOfColumns.email+1-email.length)+' |')
}

const printContacts = () => {
  console.log('Loading contact data...')
  const maxLengthOfColumns = findMaxLengthOfColumns(contactStorage);
  const lastHorizontalLine = header(maxLengthOfColumns)
  fillTable(contactStorage, maxLengthOfColumns);
  console.log(lastHorizontalLine)
}

////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

addContacts([
  {
    'first_name': 'Tanny',
    'last_name': 'Vibert',
    'email': 'tvibert0@illinois.edu',
  },
  {
    'first_name': 'Tova',
    'last_name': 'Myall',
    'email': 'tmyall1@instagram.com',
  },
  {
    'first_name': 'Engracia',
    'last_name': 'Folger',
    'email': 'efolger2@epa.gov',
  },
  {
    'first_name': 'Conroy',
    'last_name': 'Honsch',
    'email': 'chonsch3@sohu.com',
  },
  {
    'first_name': 'Virgina',
    'last_name': 'Cankett',
    'email': 'vcankett4@washington.edu',
  },
  {
    'first_name': 'Mateo',
    'last_name': 'Da Costa',
    'email': 'mdacosta5@about.com',
  },
  {
    'first_name': 'Ambrose',
    'last_name': 'Scullard',
    'email': 'ascullard6@timesonline.co.uk',
  },
  {
    'first_name': 'Shaylah',
    'last_name': 'Fairney',
    'email': 'sfairney7@stumbleupon.com',
  },
  {
    'first_name': 'Pier',
    'last_name': 'Waine',
    'email': 'pwaine8@unc.edu',
  },
  {
    'first_name': 'Karita',
    'last_name': 'Bough',
    'email': 'kbough9@angelfire.com',
  },
  {
    'first_name': 'Marguerite',
    'last_name': 'Lafayette',
    'email': 'mlafayettea@bravesites.com',
  },
  {
    'first_name': 'Northrop',
    'last_name': 'Bauchop',
    'email': 'nbauchopb@pagesperso-orange.fr',
  },
  {
    'first_name': 'Devon',
    'last_name': 'Bocking',
    'email': 'dbockingc@comcast.net',
  },
  {
    'first_name': 'Willdon',
    'last_name': 'Hedley',
    'email': 'whedleyd@purevolume.com',
  },
  {
    'first_name': 'Charil',
    'last_name': 'Clegg',
    'email': 'cclegge@weibo.com',
  },
  {
    'first_name': 'Nessi',
    'last_name': 'Bywaters',
    'email': 'nbywatersf@shop-pro.jp',
  },
  {
    'first_name': 'Mercy',
    'last_name': 'Browncey',
    'email': 'mbrownceyg@yelp.com',
  },
  {
    'first_name': 'Didi',
    'last_name': 'Grose',
    'email': 'dgroseh@google.com.hk',
  },
  {
    'first_name': 'Niccolo',
    'last_name': 'Spruce',
    'email': 'nsprucei@wordpress.com',
  },
  {
    'first_name': 'Winston',
    'last_name': 'Hixley',
    'email': 'whixleyj@homestead.com',
  },
])

// addContact('Betty', 'Holberton', 'betty.holberton@eniac.edu')
printContacts()