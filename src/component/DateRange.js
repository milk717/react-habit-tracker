export default function DateRange({startDate, range}){
    const endDate = new Date(startDate).setDateExtension(true,66);

    console.log(endDate);

    return(
        <>
            <p>{startDate} ~ {endDate}</p>
        </>
    );
}