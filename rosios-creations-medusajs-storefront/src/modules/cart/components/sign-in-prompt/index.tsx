import { Button, Heading, Text } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

const SignInPrompt = () => {
    return (
        <div className="bg-blush-light text-grey-darkest font-sans p-4 rounded-md shadow-md flex items-center justify-between">
            <div>
                <Heading level="h2" className="text-2xl font-medium">
                    Already have an account?
                </Heading>
                <Text className="mt-2">
                    Sign in for a better experience.
                </Text>
            </div>
            <div>
                <LocalizedClientLink href="/account">
                    <Button
                        variant="secondary"
                        className="bg-blush text-white font-semibold rounded-md transition-all duration-200 ease-in-out hover:bg-blush-dark px-3 py-1.5 h-10"
                        data-testid="sign-in-button"
                    >
                        Sign in
                    </Button>
                </LocalizedClientLink>
            </div>
        </div>
    );
};

export default SignInPrompt;
