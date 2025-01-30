import { Status } from "@prisma/client";

interface StatusPageProps {
    status: Status;
}






const StatusBage = ({ status }: StatusPageProps) => {

    const statusColor = status === "TODO" ? "bg-red-400 text-red-950" :
        status === "IN_PROGRESS" ? "bg-yellow-400 text-yellow-950" :
            "bg-green-400 text-green-950";

    return (
        <div className={`${statusColor} py-1 px-2 w-min rounded-lg font-semibold `}>
            {status}
        </div>
    )
}

export default StatusBage