export default function HabitCheckBoard(
    {
        progress,
    }
) {

    const dateArray = new Date(progress[0].date).dateRange(66);

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>
                            1
                        </th>
                        {
                            dateArray.map((item, index)=>(
                                <td>
                                    {item.date.slice(5,10)}
                                </td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </>
    );
};