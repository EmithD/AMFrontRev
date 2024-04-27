import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";


export default function JoinPage() {
	return (
		<div>
			
			<h1 className={title()}>Join Us</h1>
			<div className="">
				<div className="pb-4 pt-4">
					<h1 className={title({ color: "cyan", size: "sm", fullWidth: true })}>All we need is your email</h1>
				</div>
				<form action="" className="flex flex-row gap-10">
					<Input
					isRequired
					type="email"
					label="Email"
					defaultValue="email@email.com"
					className="max-w-full"
					/>
					<div className="pt-2">
						<Button type="submit">Join</Button>
					</div>
				</form>
			</div>

		</div>
	);
}
