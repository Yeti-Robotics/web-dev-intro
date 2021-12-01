const Layout: React.FC = ({ children }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
            }}
        >
            <main
                style= {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {children}
            </main>
        </div>
    )
}

export default Layout;