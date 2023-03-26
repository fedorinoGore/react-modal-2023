import { Suspense, lazy } from 'react'
import ErrorBoundary from '../error-boundary/ErrorBoundary'

interface ILazyComponentProps {
  filename: string
}

export function LazyComponent({ filename }: ILazyComponentProps) {
  console.log(`loading ./${filename}/${filename}.tsx`)

  const handleModalClose = () =>
    console.log('Hereby I promise to close this modal!')

  const Component = lazy(() => import(`./${filename}/${filename}.tsx`))

  return (
    <Suspense fallback={null}>
      <ErrorBoundary>
        {filename ? <Component onClose={handleModalClose} /> : null}
      </ErrorBoundary>
    </Suspense>
  )
}
