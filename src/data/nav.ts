import contact from "../components/icons/contact.astro";
import info from "../components/icons/info.astro";
import link from "../components/icons/link.astro";
import solution from "../components/icons/solution.astro";
import whatsapp from "../components/icons/whatsapp.astro";

export const nav = [
	{
		name: "Sobre",
		href: "/sobre",
		icon: info,
		target: "_self",
	},
	{
		name: "Serviços",
		href: "/servicos",
		icon: solution,
		target: "_self",
	},
	{
		name: "Links",
		href: "/links",
		icon: link,
		target: "_self",
	},
	{
		name: "Contato",
		href: "/contatos",
		icon: contact,
		target: "_self",
	},
	{
		name: "Whatsapp",
		href: "https://wa.me/5591992761377",
		icon: whatsapp,
		target: "_blank",
	},
];
