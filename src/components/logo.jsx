import wmaLogo from '../assets/images/wma-w-logo.svg'

export function Logo({ width }) {
    return (
        <img src={wmaLogo} alt="Logo de WM Argentina" style={{ width: width }} />
    )
}