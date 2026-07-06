"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Settings,
  User,
  ChevronRight,
  ChevronLeft,
  Bold,
  Italic,
  Underline,
  Plus,
  Trash2,
  Mail,
  Calendar as CalendarIcon,
  Check,
  Inbox,
  Star,
  Bell,
  Ellipsis,
  House,
  GripVertical,
  Send,
  Paperclip,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup } from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Slider } from "@/components/ui/slider";
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldLegend } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from "@/components/ui/popover";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
} from "@/components/ui/context-menu";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { BubbleGroup, Bubble, BubbleContent } from "@/components/ui/bubble";
import { MessageGroup, Message, MessageAvatar, MessageContent, MessageHeader } from "@/components/ui/message";
import {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
} from "@/components/ui/attachment";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Calendar } from "@/components/ui/calendar";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const buttonVariants = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const;
const buttonSizes = ["xs", "sm", "default", "lg"] as const;
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const;

const colorTokens = [
  "background", "foreground", "card", "popover", "primary", "secondary",
  "muted", "accent", "destructive", "border", "input", "ring",
  "chart-1", "chart-2", "chart-3", "chart-4", "chart-5",
  "sidebar", "sidebar-primary", "sidebar-accent",
];

const radiusTokens = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

const chartData = [
  { month: "Jan", visits: 186 },
  { month: "Feb", visits: 305 },
  { month: "Mar", visits: 237 },
  { month: "Apr", visits: 273 },
  { month: "May", visits: 209 },
  { month: "Jun", visits: 314 },
];
const chartConfig = {
  visits: { label: "Visits", color: "var(--chart-1)" },
} satisfies ChartConfig;

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDark(document.documentElement.classList.contains("dark"));
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleTheme}>
      {isDark ? "Light mode" : "Dark mode"}
    </Button>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex scroll-mt-20 flex-col gap-4">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
}

const NAV_GROUPS: { label: string; items: { id: string; label: string }[] }[] = [
  {
    label: "Foundations",
    items: [
      { id: "colors", label: "Colors" },
      { id: "radius", label: "Radius" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    label: "Buttons",
    items: [
      { id: "button", label: "Button" },
      { id: "button-group", label: "Button Group" },
      { id: "toggle", label: "Toggle" },
      { id: "toggle-group", label: "Toggle Group" },
    ],
  },
  {
    label: "Forms",
    items: [
      { id: "input", label: "Input & Textarea" },
      { id: "input-group", label: "Input Group" },
      { id: "input-otp", label: "Input OTP" },
      { id: "checkbox", label: "Checkbox" },
      { id: "radio-group", label: "Radio Group" },
      { id: "switch", label: "Switch" },
      { id: "select", label: "Select" },
      { id: "slider", label: "Slider" },
      { id: "field", label: "Field" },
    ],
  },
  {
    label: "Data Display",
    items: [
      { id: "badge", label: "Badge" },
      { id: "avatar", label: "Avatar" },
      { id: "card", label: "Card" },
      { id: "table", label: "Table" },
      { id: "item", label: "Item" },
      { id: "kbd", label: "Kbd" },
      { id: "separator", label: "Separator" },
      { id: "aspect-ratio", label: "Aspect Ratio" },
      { id: "skeleton", label: "Skeleton & Spinner" },
      { id: "progress", label: "Progress" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { id: "alert", label: "Alert" },
      { id: "empty", label: "Empty" },
      { id: "sonner", label: "Sonner (Toast)" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { id: "breadcrumb", label: "Breadcrumb" },
      { id: "tabs", label: "Tabs" },
      { id: "pagination", label: "Pagination" },
      { id: "navigation-menu", label: "Navigation Menu" },
      { id: "menubar", label: "Menubar" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { id: "dialog", label: "Dialog" },
      { id: "alert-dialog", label: "Alert Dialog" },
      { id: "sheet", label: "Sheet" },
      { id: "drawer", label: "Drawer" },
      { id: "popover", label: "Popover" },
      { id: "hover-card", label: "Hover Card" },
      { id: "tooltip", label: "Tooltip" },
      { id: "dropdown-menu", label: "Dropdown Menu" },
      { id: "context-menu", label: "Context Menu" },
      { id: "command", label: "Command" },
      { id: "combobox", label: "Combobox" },
    ],
  },
  {
    label: "Layout",
    items: [
      { id: "accordion", label: "Accordion" },
      { id: "collapsible", label: "Collapsible" },
      { id: "resizable", label: "Resizable" },
      { id: "scroll-area", label: "Scroll Area" },
      { id: "carousel", label: "Carousel" },
      { id: "sidebar", label: "Sidebar" },
    ],
  },
  {
    label: "Messaging",
    items: [
      { id: "bubble", label: "Bubble" },
      { id: "message", label: "Message" },
      { id: "attachment", label: "Attachment" },
    ],
  },
  {
    label: "Data Viz",
    items: [
      { id: "chart", label: "Chart" },
      { id: "calendar", label: "Calendar" },
    ],
  },
];

function QuickNav() {
  return (
    <nav className="sticky top-20 hidden w-48 shrink-0 flex-col gap-5 self-start lg:flex">
      {NAV_GROUPS.map((group) => (
        <div key={group.label} className="flex flex-col gap-1">
          <span className="px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {group.label}
          </span>
          {group.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-2 py-1 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}

export default function ComponentsPage() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/80 px-8 py-4 backdrop-blur">
          <div>
            <h1 className="text-lg font-semibold">Component Library</h1>
            <p className="text-sm text-muted-foreground">
              Local preview of every component and token in the design system
            </p>
          </div>
          <DarkModeToggle />
        </header>

        <div className="flex gap-10 px-8 py-10">
          <QuickNav />

          <main className="flex min-w-0 flex-1 flex-col gap-14">
            {/* ---------------- Foundations ---------------- */}
            <Section id="colors" title="Colors">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {colorTokens.map((token) => (
                  <div key={token} className="flex flex-col gap-2">
                    <div
                      className="flex h-20 items-center justify-center rounded-lg border border-border"
                      style={{ backgroundColor: `var(--${token})` }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: `var(--${token}-foreground, var(--foreground))` }}
                      >
                        Aa
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{token}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="radius" title="Radius">
              <div className="flex flex-wrap gap-6">
                {radiusTokens.map((token) => (
                  <div key={token} className="flex flex-col items-center gap-2">
                    <div className={`size-16 rounded-${token} border border-border bg-muted`} />
                    <span className="text-xs text-muted-foreground">{token}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="typography" title="Typography">
              <div className="flex flex-col gap-2">
                <p className="font-sans text-2xl">Geist Sans — The quick brown fox</p>
                <p className="font-mono text-2xl">Geist Mono — The quick brown fox</p>
              </div>
            </Section>

            {/* ---------------- Buttons ---------------- */}
            <Section id="button" title="Button">
              <div className="overflow-x-auto">
                <table className="border-separate border-spacing-4">
                  <thead>
                    <tr>
                      <th />
                      {buttonSizes.map((size) => (
                        <th key={size} className="text-left text-xs font-medium text-muted-foreground">
                          {size}
                        </th>
                      ))}
                      {iconSizes.map((size) => (
                        <th key={size} className="text-left text-xs font-medium text-muted-foreground">
                          {size}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {buttonVariants.map((variant) => (
                      <tr key={variant}>
                        <td className="pr-4 text-xs font-medium text-muted-foreground">{variant}</td>
                        {buttonSizes.map((size) => (
                          <td key={size}>
                            <Button variant={variant} size={size}>
                              Button
                            </Button>
                          </td>
                        ))}
                        {iconSizes.map((size) => (
                          <td key={size}>
                            <Button variant={variant} size={size}>
                              <Settings />
                            </Button>
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td className="pr-4 text-xs font-medium text-muted-foreground">disabled</td>
                      {buttonSizes.map((size) => (
                        <td key={size}>
                          <Button variant="default" size={size} disabled>
                            Button
                          </Button>
                        </td>
                      ))}
                      {iconSizes.map((size) => (
                        <td key={size}>
                          <Button variant="default" size={size} disabled>
                            <Settings />
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section id="button-group" title="Button Group">
              <Row>
                <ButtonGroup>
                  <Button variant="outline">One</Button>
                  <Button variant="outline">Two</Button>
                  <Button variant="outline">Three</Button>
                </ButtonGroup>
                <ButtonGroup orientation="vertical">
                  <Button variant="outline">One</Button>
                  <Button variant="outline">Two</Button>
                  <Button variant="outline">Three</Button>
                </ButtonGroup>
              </Row>
            </Section>

            <Section id="toggle" title="Toggle">
              <Row>
                <Toggle aria-label="Toggle bold">
                  <Bold />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle italic">
                  <Italic />
                </Toggle>
              </Row>
            </Section>

            <Section id="toggle-group" title="Toggle Group">
              <ToggleGroup type="single" defaultValue="bold">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline />
                </ToggleGroupItem>
              </ToggleGroup>
            </Section>

            {/* ---------------- Forms ---------------- */}
            <Section id="input" title="Input & Textarea">
              <div className="flex max-w-sm flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="demo-email">Email</Label>
                  <Input id="demo-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="demo-message">Message</Label>
                  <Textarea id="demo-message" placeholder="Type your message..." />
                </div>
                <NativeSelect defaultValue="apple">
                  <NativeSelectOption value="apple">Apple</NativeSelectOption>
                  <NativeSelectOption value="banana">Banana</NativeSelectOption>
                  <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
                </NativeSelect>
              </div>
            </Section>

            <Section id="input-group" title="Input Group">
              <InputGroup className="max-w-sm">
                <InputGroupAddon>
                  <Search className="size-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search..." />
              </InputGroup>
            </Section>

            <Section id="input-otp" title="Input OTP">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Section>

            <Section id="checkbox" title="Checkbox">
              <div className="flex items-center gap-2">
                <Checkbox id="demo-terms" checked={checked} onCheckedChange={(v) => setChecked(v === true)} />
                <Label htmlFor="demo-terms">Accept terms and conditions</Label>
              </div>
            </Section>

            <Section id="radio-group" title="Radio Group">
              <RadioGroup defaultValue="comfortable" className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
              </RadioGroup>
            </Section>

            <Section id="switch" title="Switch">
              <div className="flex items-center gap-2">
                <Switch id="demo-switch" checked={switchOn} onCheckedChange={setSwitchOn} />
                <Label htmlFor="demo-switch">Airplane mode</Label>
              </div>
            </Section>

            <Section id="select" title="Select">
              <Select defaultValue="apple">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Section>

            <Section id="slider" title="Slider">
              <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} className="max-w-sm" />
            </Section>

            <Section id="field" title="Field">
              <FieldSet className="max-w-sm">
                <FieldLegend>Profile</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="field-name">Name</FieldLabel>
                    <Input id="field-name" placeholder="Jane Doe" />
                    <FieldDescription>Your full name.</FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </Section>

            {/* ---------------- Data Display ---------------- */}
            <Section id="badge" title="Badge">
              <Row>
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="ghost">Ghost</Badge>
                <Badge variant="link">Link</Badge>
              </Row>
            </Section>

            <Section id="avatar" title="Avatar">
              <Row>
                <Avatar size="sm">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
              </Row>
            </Section>

            <Section id="card" title="Card">
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here.</CardDescription>
                  <CardAction>
                    <Button size="sm" variant="outline">
                      Action
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Card content area.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Save</Button>
                </CardFooter>
              </Card>
            </Section>

            <Section id="table" title="Table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Alice</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>$250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Section>

            <Section id="item" title="Item">
              <ItemGroup className="max-w-sm">
                <Item variant="outline">
                  <ItemMedia variant="icon">
                    <User />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Jane Doe</ItemTitle>
                    <ItemDescription>jane@example.com</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button size="icon-sm" variant="ghost">
                      <Ellipsis />
                    </Button>
                  </ItemActions>
                </Item>
              </ItemGroup>
            </Section>

            <Section id="kbd" title="Kbd">
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>Shift</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </Section>

            <Section id="separator" title="Separator">
              <div className="flex max-w-sm flex-col gap-4">
                <div>
                  <p className="text-sm">Above</p>
                  <Separator className="my-2" />
                  <p className="text-sm">Below</p>
                </div>
                <div className="flex h-6 items-center gap-2 text-sm">
                  <span>Left</span>
                  <Separator orientation="vertical" />
                  <span>Right</span>
                </div>
              </div>
            </Section>

            <Section id="aspect-ratio" title="Aspect Ratio">
              <div className="w-64">
                <AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-lg bg-muted">
                  <span className="text-sm text-muted-foreground">16:9</span>
                </AspectRatio>
              </div>
            </Section>

            <Section id="skeleton" title="Skeleton & Spinner">
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-40 rounded-md" />
                  <Skeleton className="h-4 w-32 rounded-md" />
                </div>
                <Spinner className="size-6" />
              </div>
            </Section>

            <Section id="progress" title="Progress">
              <Progress value={66} className="max-w-sm" />
            </Section>

            {/* ---------------- Feedback ---------------- */}
            <Section id="alert" title="Alert">
              <div className="flex max-w-md flex-col gap-4">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>This is an alert description.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Something went wrong</AlertTitle>
                  <AlertDescription>This is an alert description.</AlertDescription>
                </Alert>
              </div>
            </Section>

            <Section id="empty" title="Empty">
              <Empty className="max-w-md">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Inbox />
                  </EmptyMedia>
                  <EmptyTitle>No results found</EmptyTitle>
                  <EmptyDescription>Try adjusting your filters.</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button size="sm" variant="outline">
                    Reset filters
                  </Button>
                </EmptyContent>
              </Empty>
            </Section>

            <Section id="sonner" title="Sonner (Toast)">
              <Button
                variant="outline"
                onClick={() =>
                  toast("Event created", {
                    description: "Sunday, July 5 at 4:00 PM",
                  })
                }
              >
                Show toast
              </Button>
            </Section>

            {/* ---------------- Navigation ---------------- */}
            <Section id="breadcrumb" title="Breadcrumb">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <House className="size-3.5" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Library</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Item</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Section>

            <Section id="tabs" title="Tabs">
              <Tabs defaultValue="account" className="max-w-sm">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="text-sm text-muted-foreground">
                  Account settings go here.
                </TabsContent>
                <TabsContent value="password" className="text-sm text-muted-foreground">
                  Password settings go here.
                </TabsContent>
                <TabsContent value="settings" className="text-sm text-muted-foreground">
                  General settings go here.
                </TabsContent>
              </Tabs>
            </Section>

            <Section id="pagination" title="Pagination">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </Section>

            <Section id="navigation-menu" title="Navigation Menu">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink href="#" className="block p-2 text-sm">
                        Item A
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#" className="block p-2 text-sm">
                        Item B
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#">About</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Section>

            <Section id="menubar" title="Menubar">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </Section>

            {/* ---------------- Overlays ---------------- */}
            <Section id="dialog" title="Dialog">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here.</DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Section>

            <Section id="alert-dialog" title="Alert Dialog">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Delete account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Section>

            <Section id="sheet" title="Sheet">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes and save.</SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <Button>Save</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </Section>

            <Section id="drawer" title="Drawer">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Section>

            <Section id="popover" title="Popover">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader>
                    <PopoverTitle>Dimensions</PopoverTitle>
                    <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            </Section>

            <Section id="hover-card" title="Hover Card">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a className="text-sm underline underline-offset-4">@shizen</a>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm">Sage green design system for modern portfolios.</p>
                </HoverCardContent>
              </HoverCard>
            </Section>

            <Section id="tooltip" title="Tooltip">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Add to library</TooltipContent>
              </Tooltip>
            </Section>

            <Section id="dropdown-menu" title="Dropdown Menu">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Section>

            <Section id="context-menu" title="Context Menu">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Back</ContextMenuItem>
                  <ContextMenuItem>Forward</ContextMenuItem>
                  <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
                </ContextMenuContent>
              </ContextMenu>
            </Section>

            <Section id="command" title="Command">
              <Command className="max-w-sm rounded-lg border shadow-sm">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <CalendarIcon />
                      Calendar
                    </CommandItem>
                    <CommandItem>
                      <Search />
                      Search Emoji
                    </CommandItem>
                    <CommandItem>
                      <Settings />
                      Settings
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </Section>

            <Section id="combobox" title="Combobox">
              <Combobox items={["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]}>
                <ComboboxInput placeholder="Search framework..." className="w-56" />
                <ComboboxContent>
                  <ComboboxEmpty>No framework found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item: string) => <ComboboxItem key={item} value={item} />}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Section>

            {/* ---------------- Layout ---------------- */}
            <Section id="accordion" title="Accordion">
              <Accordion type="single" collapsible className="max-w-md">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes, it adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>Yes, it comes with default styles from the design system.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </Section>

            <Section id="collapsible" title="Collapsible">
              <CollapsibleDemo />
            </Section>

            <Section id="resizable" title="Resizable">
              <ResizablePanelGroup direction="horizontal" className="h-32 max-w-md rounded-lg border">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center text-sm">One</div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center text-sm">Two</div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </Section>

            <Section id="scroll-area" title="Scroll Area">
              <ScrollArea className="h-32 w-64 rounded-md border">
                <div className="flex flex-col gap-2 p-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <p key={i} className="text-sm">
                      Item {i + 1}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </Section>

            <Section id="carousel" title="Carousel">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {[1, 2, 3].map((n) => (
                    <CarouselItem key={n}>
                      <div className="flex h-32 items-center justify-center rounded-lg bg-muted text-2xl font-semibold text-muted-foreground">
                        {n}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </Section>

            <Section id="sidebar" title="Sidebar">
              <div className="h-80 w-full max-w-lg overflow-hidden rounded-lg border">
                <SidebarProvider className="h-full min-h-0">
                  <Sidebar collapsible="none" className="h-full">
                    <SidebarHeader>
                      <span className="px-2 text-sm font-semibold">Shizen</span>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton isActive>
                                <Settings />
                                Dashboard
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <Settings />
                                Projects
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                      <div className="flex items-center gap-2 px-2 text-sm">
                        <Avatar size="sm">
                          <AvatarFallback>K</AvatarFallback>
                        </Avatar>
                        Kenneth
                      </div>
                    </SidebarFooter>
                  </Sidebar>
                  <SidebarInset className="min-h-0">
                    <div className="flex items-center gap-2 border-b border-border p-3">
                      <SidebarTrigger />
                      <span className="text-sm text-muted-foreground">Main content</span>
                    </div>
                  </SidebarInset>
                </SidebarProvider>
              </div>
            </Section>

            {/* ---------------- Messaging ---------------- */}
            <Section id="bubble" title="Bubble">
              <BubbleGroup className="max-w-sm">
                <Bubble align="start" variant="muted">
                  <BubbleContent>Hey, how are you?</BubbleContent>
                </Bubble>
                <Bubble align="end" variant="default">
                  <BubbleContent>Doing well, thanks!</BubbleContent>
                </Bubble>
              </BubbleGroup>
            </Section>

            <Section id="message" title="Message">
              <MessageGroup className="max-w-sm">
                <Message align="start">
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <MessageHeader>Assistant</MessageHeader>
                    <Bubble variant="muted">
                      <BubbleContent>Hello! How can I help today?</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageGroup>
              <div className="flex max-w-sm items-center gap-2 pt-2">
                <Input placeholder="Type a message..." />
                <Button size="icon">
                  <Send />
                </Button>
              </div>
            </Section>

            <Section id="attachment" title="Attachment">
              <AttachmentGroup className="max-w-sm">
                <Attachment>
                  <AttachmentMedia>
                    <Paperclip className="size-4" />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>presentation.pdf</AttachmentTitle>
                    <AttachmentDescription>2.4 MB</AttachmentDescription>
                  </AttachmentContent>
                </Attachment>
              </AttachmentGroup>
            </Section>

            {/* ---------------- Data Viz ---------------- */}
            <Section id="chart" title="Chart">
              <ChartContainer config={chartConfig} className="h-48 max-w-md">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
                </BarChart>
              </ChartContainer>
            </Section>

            <Section id="calendar" title="Calendar">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-fit rounded-lg border"
              />
            </Section>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}

function CollapsibleDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="max-w-sm">
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm">
          {open ? "Hide" : "Show"} details
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
        Here is the hidden content that expands and collapses.
      </CollapsibleContent>
    </Collapsible>
  );
}
