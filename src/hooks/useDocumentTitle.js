import { useEffect } from 'react'

export default function useDocumentTitle(title) {

    useEffect(() => {
        document.title = title

        //for componentWillUnmount
        return () => {
            // do something...
            console.log('bye bye ')
        }
    });

}