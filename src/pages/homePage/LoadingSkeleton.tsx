import { Stack, Skeleton } from "@mui/material"


const LoadingSkeleton = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <Stack spacing={1} sx={{ width: '48%' }}>
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="rectangular" sx={{ width: '100%' }} height={90} />
          <Skeleton variant="rounded" sx={{ width: '100%' }} height={90} />
        </Stack>
        <Stack spacing={1} sx={{ width: '48%' }}>
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="rectangular" sx={{ width: '100%' }} height={90} />
          <Skeleton variant="rounded" sx={{ width: '100%' }} height={90} />
        </Stack>
      </div>
      <div className="flex flex-wrap justify-between">
        <Stack spacing={1} sx={{ width: '48%' }}>
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="rectangular" sx={{ width: '100%' }} height={90} />
          <Skeleton variant="rounded" sx={{ width: '100%' }} height={90} />
        </Stack>
        <Stack spacing={1} sx={{ width: '48%' }}>
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="rectangular" sx={{ width: '100%' }} height={90} />
          <Skeleton variant="rounded" sx={{ width: '100%' }} height={90} />
        </Stack>
      </div>
    </>

  )
}

export default LoadingSkeleton