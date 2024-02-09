
import BasicList from "./BasicList";


function Page() {
    
    const lista1 = [
        { text : 'Inbox' },
        { text : 'Drafts' },
        { text : 'Trash' },
        { text : 'Spam' },
        { text : 'algo' }
      ];

    return (
    <>
        <BasicList listItems={lista1}/>
    </>
  );
}
export default Page;